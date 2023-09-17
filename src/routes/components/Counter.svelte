<script lang='ts'>
    export let title: string = "flare"
    export let cur: number = 0
</script>

<div class="box">
    <div class="text">
        {title}
    </div>
    <div class="value">
        {cur}
    </div>
</div>

<style>
    .box {
        border: 1px solid black;
        border-radius: 10px;
        background-color: var(--color, 'white');
        width: 55px;
        height: 55px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    .text{
        width: 100%;
        text-align: center;
        margin-top: 5px;
    }
    .value{
        font-size: 30px;
        font-family: serif;
        width: 100%;
        text-align: center;
    }
</style>