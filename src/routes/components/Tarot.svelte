<script>
    export let megami_no = 1;
    $: image_src = `/furuyoni_commons_na/furuyoni/tarots/tarot_${String(megami_no).padStart(2, "0")}.png`
</script>

<img src={image_src} alt={`${megami_no} tarots`}>

<style>
    img {
        height: 125px;
        width: 63px;
    }
</style>