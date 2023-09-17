<script lang='ts'>
    import Counter from "./Counter.svelte";
    import SakuraBar from "./SakuraBar.svelte";
	import Tarot from "./Tarot.svelte";
    import Player from "$lib/Player";

    export let player: Player = new Player("DEFAULT", true);
    export let isActive : boolean = true;
</script>

<div class=wrapper>
    <fieldset class=playerBox class:turnPlayer={isActive}>
        <legend>{player.name}</legend>
        <div class=counterBox>
            <Counter cur={player.flare} title=플레어 --color=LightPink/>
            <Counter cur={player.conc} title=집중력 --color=LightBlue/>
        </div>
        <SakuraBar max={5} cur={player.aura} title=오라 --color=LightCyan/>
        <SakuraBar cur={player.life} title=생명력 --color=Bisque/>
    </fieldset>
    <div class=tarotBox>
        <Tarot megami_no={player.megami[0]}/>
        <Tarot megami_no={player.megami[1]}/>
    </div>
</div>

<style>
    .wrapper{
        position: relative;
    }
    .playerBox{
        border: 1px solid black;
        border-radius: 10px;
        box-sizing: border-box;

        width: 360px;
        height: 210px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: space-around;
    }
    .turnPlayer{
        border: 2px solid blue;
    }
    legend{
        font-size: 20px;
    }
    .counterBox{
        display: flex;
        width: 100%;
    }
    .tarotBox{
        position: absolute;
        left: 280px;
        top: 20px;
        display: flex;
        flex-wrap: nowrap;
    }
</style>