<script lang="ts">
	let canvas: HTMLCanvasElement;
	let val: string = '10000000';

	const size = 500;
	$: {
		if (canvas) {
			const MIN = parseInt(val, 10);

			// const renderFrame = () => {
			console.time('drawing');
			let ctx = canvas.getContext('2d')!;
			ctx.clearRect(0, 0, size, size);
			ctx.beginPath();
			ctx.setLineDash([3, 5]);
			ctx.moveTo(MIN, MIN);
			ctx.lineTo(-MIN, -MIN);
			ctx.stroke();
			ctx.closePath();
			console.timeEnd('drawing');
			// setTimeout(renderFrame, 1000);
			// };
		}
	}
</script>

<input bind:value={val} />

<canvas width={size} height={size} bind:this={canvas} />

<style>
	canvas {
		border: 1px #888 solid;
	}
</style>
