<script>
    export let max = 10;
    export let cur = 5;
    export let title = "life";
</script>

<div class="box">
    <div class="textbox">
        <div class="text">
            {title}
        </div>
        <div class="value">
            {cur}
        </div>
    </div>
    {#each [...Array(max).keys()] as i}
        <img src='/furuyoni_commons_na/others/sakura_token.png' alt='sakura token' class={i < cur ? "" : "grayscale"}/>
    {/each}
</div>
<style>
    img {
        width: 25px;
        height: 40px;
        margin-right: 8px;
    }
    .grayscale {
        filter: grayscale(100%);
    }
    .box {
        border: 1px solid black;
        border-radius: 10px;
        background-color: var(--color, 'white');
        width: auto;
        height: 45px;
        padding: 5px;
        display: flex;
        align-items: center;
    }
    .textbox{
        display: flex;
        flex-wrap: wrap;
        width: 50px;
        margin-right: 10px;
        align-items: center;
    }
    .text {
        width:100%;
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