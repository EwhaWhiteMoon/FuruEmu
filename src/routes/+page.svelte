<script lang=ts>
	import GameBoard from "./components/GameBoard.svelte";
	import ControlBox from "./components/controlBox.svelte";
    import { players, turnPlayer, distance, dust, masterDistance} from "./stores";

</script>

<div class=wrapper>
    <div class=content>
    <GameBoard 
        player1={$players[0]}
        player2={$players[1]}
        turnPlayer={$turnPlayer}
        distance={$distance}
        dust={$dust}
    />

    <ControlBox/>
    </div>
</div>

<style>
    .wrapper {
        display: grid;
        height: 100dvh;
        place-items: center;
    }
    .content {
        display: flex;
        height: auto;
    }
</style>