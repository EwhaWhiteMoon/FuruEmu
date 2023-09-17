<script lang="ts">
    export let size: string | 'small' | 'normal' | 'large' = 'small';
    export let disabled: boolean = false;
</script>

<button on:click disabled={disabled} class={size} >
    <slot/>
</button>


<style>
    button {
        width: 60px;
        height: 40px;
        padding: 0;
        font-size: 20px;
        
        background-color: var(--color, cornsilk);
        border: 0.5px black solid;
		box-shadow: 0 8px 0 var(--shadow-color, bisque), 2px 9px 10px rgba(0,0,0,.35);
		transform: translate(0, -5px);
		transition: all 0.2s;
    }
    .small {
        width: 60px;
    }
    .normal {
        width: 120px;
    }
    .large {
        width: 240px;
    }
    button:active {
		transform: translate(0, 2px);
		box-shadow: 0 2px var(--shadow-color, 'white'), 2px 2px 10px rgba(0,0,0,.35);
	}
    button:disabled {
        background-color: darkgray;
		box-shadow: 0 8px 0 gray, 2px 9px 10px rgba(0,0,0,.35);
    }
    button:disabled:active {
		transform: translate(0, -5px);
		box-shadow: 0 8px gray, 2px 9px 10px rgba(0,0,0,.35);
	}
</style>