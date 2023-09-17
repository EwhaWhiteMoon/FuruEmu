<script lang='ts'>
	import Counter from "./Counter.svelte";
    import PlayerBox from "./PlayerBox.svelte";
	import SakuraBar from "./SakuraBar.svelte";
    import Player from "$lib/Player";

    export let player1: Player = new Player("DEFAULT1", true);
    export let player2: Player = new Player("DEFAULT2", false);
    export let distance: number = 0;
    export let dust: number = 0;
    export let turnPlayer: number = 0;

</script>
<div class=board>
    <PlayerBox
    player={player1}
    isActive={turnPlayer == 0}/>
    <div class=boardBox>
        <SakuraBar title=간격 cur={distance} --color="Thistle"/>
        <Counter title=더스트 cur={dust} --color="Gainsboro"/>
    </div>
    <PlayerBox
    player={player2}
    isActive={turnPlayer == 1}/>
</div>


<style>
    .board{
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        justify-content: center;

        height: 550px;
        width: 500px;
    }
    .boardBox{
        display: flex;
    }
</style>