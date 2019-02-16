<template>
	<div class="steps" id="steps">
		<div class="container">
			<div class="steps__title" data-aos="zoom-in">
				<h2>Несколько простых шагов для поступления</h2>
			</div>
			<div class="row">
				<div class="col-12 col-lg-7 col-xl-6">
					<div class="steps__steps-wrapper" v-if="stepsLoaded">
						<div
							:class="[{'steps__step_close': stepsCurrent !== index}, 'steps__step ']"
							v-for="(step, index) in stepsContent.acf.steps"
							:key="index"
							@click="setStepsCurrent(index)"
						>
							<div class="steps__step-line">
								<div class="steps__step-pic" :style="{ backgroundImage: `url('${step.icon.url}')` }"></div>
							</div>
							<div>
								<div class="steps__step-title">
									<h4 v-html="step.title"></h4>
								</div>
								<div class="steps__step-description">
									<p v-html="step.description"></p>
									<a class="button steps_step-button" :href="step.link">Подробнее</a>
								</div>
							</div>
						</div>
					</div>
					<div class="steps__steps-wrapper_loader" v-else>
						<div class="steps__step steps__step_close" v-for="i in [0,1,2]" :key="i">
							<div class="steps__step-line">
								<div class="steps__step-pic"></div>
							</div>
							<div class="steps__step-title">
								<h4></h4>
							</div>
						</div>
					</div>
				</div>
				<div class="col-12 col-lg-4 ml-auto">
					<div class="steps__card-wrapper" data-aos="zoom-in-left">
						<div class="steps__card">
							<div class="steps__card-title">
								<h3>Нормативные документы</h3>
							</div>
							<div class="steps__card-content" v-if="stepsLoaded">
								<a
									:href="document.document"
									v-html="document.name"
									v-for="(document, index) in stepsContent.acf.documents"
									:key="index"
								></a>
							</div>
							<div v-else class="steps__card-content_loader">
								<loader/>
							</div>
						</div>
						<div class="steps__card steps__card_fantom"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import loader from "@/components/loader";

export default {
	name: "steps",
	components: {
		loader
	},
	created() {
		this.fetchStepsContent();
	},
	methods: {
		...mapMutations("steps", ["setStepsCurrent"]),
		...mapActions("steps", {
			fetchStepsContent: "fetchContent"
		})
	},
	computed: {
		...mapState("steps", {
			stepsLoaded: state => state.stepsLoaded,
			stepsContent: state => state.stepsContent,
			stepsCurrent: state => state.stepsCurrent
		})
	}
};
</script>
