<script lang="ts">
    import GameButton from './GameButton.svelte';
    import { players, turnPlayer, distance, dust, masterDistance} from "../stores";

    
</script>

<div class=wrapper>
    <div class=buttonBox>
        {#if $distance > $masterDistance}
            <GameButton on:click={function advance(){
                $distance -= 1;
                $players[$turnPlayer].aura += 1;
            }}
            disabled={!($distance > $masterDistance && $players[$turnPlayer].aura < 5)}
            >전진</GameButton>
        {:else}
            <GameButton on:click={function breakaway(){
                $distance += 1;
                $dust -= 1;
            }}
            disabled={!($distance < 10 && $dust > 0)}
            >이탈</GameButton>
        {/if}
        <GameButton on:click={function retreat(){
            $distance += 1;
            $players[$turnPlayer].aura -= 1;
        }}
        disabled={!($distance < 10 && $players[$turnPlayer].aura > 0)}
        >후퇴</GameButton>

        <GameButton on:click={function recover(){
            $dust -= 1;
            $players[$turnPlayer].aura += 1;
        }}
        disabled={!($dust > 0 && $players[$turnPlayer].aura < 5)}
        >휘감기</GameButton>

        <GameButton on:click={function focus(){
            $players[$turnPlayer].aura -= 1;
            $players[$turnPlayer].flare += 1;
        }}
        disabled={!($players[$turnPlayer].aura > 0)}
        >품기</GameButton>
    </div>
    <div class=buttonBox>
        <GameButton size=normal on:click={function turnEnd(){
            $turnPlayer += 1;
            if($turnPlayer == 2) $turnPlayer -= 2;
        }}>턴 종료</GameButton>
    </div>
</div>


<style>
    .wrapper {
        display: block;
        padding: 30px 20px 0px;
    }
    .buttonBox {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-content: center;
    }
</style>