<template>
	<div>
		<div class="loader">
			<svg class="loader__circular" viewBox="25 25 50 50">
				<circle
					class="loader__path"
					cx="50"
					cy="50"
					r="20"
					fill="none"
					stroke-width="2"
					stroke-miterlimit="10"
				></circle>
			</svg>
		</div>
	</div>
</template>

<script>
export default {
	name: "loader"
};
</script>