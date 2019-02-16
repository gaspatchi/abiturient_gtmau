<template>
	<div>
		<div
			:class="[{'questions__question_closed': !questionOpen},'questions__question']"
			@click="toggleQuestion"
		>
			<div class="questions__question-title">
				<h3 v-html="questionTitle"></h3>
				<div class="questions__button">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path
							d="M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z"
						></path>
					</svg>
				</div>
			</div>
			<div class="questions__answer" :style="{height: height+'px'}">
				<p v-html="questionAnswer" ref="questionAnswer"></p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "question",
	props: ["questionTitle", "questionAnswer"],
	data() {
		return {
			questionOpen: false,
			height: 0
		};
	},
	methods: {
		toggleQuestion() {
			if (this.questionOpen === true) {
				this.height = 0;
				this.questionOpen = false;
			} else {
				this.questionOpen = true;
				this.$nextTick(
					() => (this.height = this.$refs.questionAnswer.clientHeight)
				);
			}
		}
	}
};
</script>
