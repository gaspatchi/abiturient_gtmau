<template>
	<div class="professions" id="specialty">
		<div class="professions__title-wrapper">
			<div class="professions__title-buble">
				<h1>Набор по специальностям</h1>
			</div>
		</div>
		<div
			class="professions__photo container"
			:style="{ backgroundImage: `url('${currentProfession.cover.url}')` }"
			v-if="professionsLoaded"
		>
			<img
				src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADAQMAAACUBtwLAAAAA1BMVEVHcEyC+tLSAAAAAXRSTlMAQObYZgAAAApJREFUCB1jAAMAAAYAAcXjo3IAAAAASUVORK5CYII="
				style="width: 90%; height: auto;"
			>
		</div>
		<div class="professions__photo professions__photo_loader container" v-else>
			<img
				src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADAQMAAACUBtwLAAAAA1BMVEVHcEyC+tLSAAAAAXRSTlMAQObYZgAAAApJREFUCB1jAAMAAAYAAcXjo3IAAAAASUVORK5CYII="
				style="width: 90%; height: auto;"
			>
			<loader/>
		</div>
		<div class="professions__content">
			<div class="container">
				<div class="row">
					<div class="col-12 col-lg-4 col-xl-4">
						<div
							class="professions__card"
							data-aos="fade-right"
							data-aos-delay="200"
							v-if="professionsLoaded"
						>
							<div class="professions__card-title" v-html="currentProfession.name"></div>
							<div class="professions__card-text" v-html="currentProfession.text"></div>
							<div
								class="professions__card-image"
								:style="{ backgroundImage: `url('${currentProfession.icon.url}')` }"
							></div>
							<div class="professions__card-info">
								<a
									:class="[{'professions_card-button_visible': currentProfession.status.value !== 'close'},'button professions_card-button button_shadow']"
									@click="$scrollTo('#steps')"
								>Поступить</a>
							</div>
						</div>
						<div class="professions__card professions__card-loader" v-else>
							<loader/>
						</div>
					</div>
					<div class="col-12 col-lg-8 col-xl-8">
						<div class="professions__list">
							<div class="professions__slider-wrapper">
								<div class="professions__slider">
									<swiper
										class="professions__slider_overflow_visible"
										:options="swiperOptions"
										ref="professionsSlider"
										v-if="professionsLoaded"
									>
										<swiper-slide
											class="professions__slide-wrapper"
											v-for="(profession,index) in professionsContent"
											:key="profession.id"
										>
											<div
												class="professions__slide"
												@click="setCurrentProfession(index)"
												data-aos="fade-up-left"
												:data-aos-delay="index*100"
											>
												<div class="professions__slide-title" v-html="profession.acf.name"></div>
												<div
													src
													class="professions__slide-icon"
													:style="{ backgroundImage: `url('${profession.acf.icon.url}')` }"
												></div>
												<span
													:class="[returnClass(profession.acf.status.value),'button professions_slide-button']"
													v-html="profession.acf.status.label"
												></span>
											</div>
										</swiper-slide>
									</swiper>
									<div v-else class="professions__slider_preloader">
										<div v-for="i in [0,1,2,3]" :key="i" class="professions__slide-wrapper">
											<div class="professions__slide"></div>
										</div>
									</div>
								</div>
								<input
									type="range"
									class="professions__range-input"
									min="1"
									max="100"
									value="1"
									v-model.number="rangeInput"
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mapMutations, mapActions, mapState } from "vuex";
import isEmpty from "lodash/isEmpty";
import loader from "@/components/loader";
export default {
	name: "professions",
	components: {
		swiper,
		swiperSlide,
		loader
	},
	data() {
		return {
			rangeInput: 1,
			swiperOptions: {
				slidesPerView: "auto",
				freeMode: true,
				freeModeMomentumRatio: 0.3,
				freeModeMomentumBounceRatio: 0.3,
				on: {
					touchEnd: () => {
						this.setSliderRange();
					}
				}
			}
		};
	},
	created() {
		this.fetchContent();
	},
	methods: {
		setSliderRange() {
			let wrapperWidth = this.$refs.professionsSlider.swiper.wrapperEl
				.scrollWidth;
			let sliderWidth = this.$refs.professionsSlider.swiper.width;
			let position =
				(this.$refs.professionsSlider.swiper.translate /
					(sliderWidth - wrapperWidth)) *
				100;
			this.rangeInput = position;
		},
		returnClass(status) {
			switch (status) {
				case "close":
					return "professions_slide-button_close";
				case "open":
					return "professions_slide-button_open";
			}
		},
		...mapMutations("professions", ["setCurrentProfession"]),
		...mapActions("professions", ["fetchContent"])
	},
	computed: {
		currentProfession() {
			if (isEmpty(this.professionsContent)) {
				return {
					name: "",
					text: "",
					icon: {
						url: ""
					},
					status: {
						label: ""
					}
				};
			} else {
				return this.professionsContent[this.professionsCurrent].acf;
			}
		},
		...mapState("professions", {
			professionsLoaded: state => state.professionsLoaded,
			professionsContent: state => state.professionsContent,
			professionsCurrent: state => state.professionsCurrent
		})
	},
	watch: {
		rangeInput(state) {
			let wrapperWidth = this.$refs.professionsSlider.swiper.wrapperEl
				.scrollWidth;
			let sliderWidth = this.$refs.professionsSlider.swiper.width;
			this.$refs.professionsSlider.swiper.setTranslate(
				-(((wrapperWidth - sliderWidth) / 100) * state)
			);
		}
	}
};
</script>
