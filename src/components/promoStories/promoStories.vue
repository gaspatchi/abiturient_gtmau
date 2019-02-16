<template>
	<transition name="fade">
		<div v-if="promoStoriesOpend" class="stories">
			<div class="stories__wrapper">
				<div @click="closeStories" class="stories__button-close hidden-sm-down"></div>
				<div class="container">
					<div class="row">
						<swiper class="stories-slider" :options="swiperOptions" ref="promoStories">
							<swiper-slide
								class="col-12 col-sm-7 col-md-4 col-lg-3"
								v-for="slide  in promoSliderContent"
								:key="slide.id"
							>
								<img
									src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQAQMAAAD+hscAAAAAA1BMVEVHcEyC+tLSAAAAAXRSTlMAQObYZgAAAAtJREFUCB1jIBEAAAAwAAEK50gUAAAAAElFTkSuQmCC"
								>
								<div class="stories-slider__slide-wrapper">
									<div class="stories__story">
										<promoStoriesContent
											:currentStoryIndex="currentStory"
											:slidesTotal="promoSliderContentSize"
											:storyImages="slide.acf.images"
											@prevSlide="prevSlide()"
											@nextSlide="nextSlide()"
											@closeStories="closeStories"
										></promoStoriesContent>
									</div>
								</div>
							</swiper-slide>
						</swiper>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import size from "lodash/size";
import promoStoriesContent from "./promoStoriesContent";
export default {
	name: "promoStories",
	components: {
		swiper,
		swiperSlide,
		promoStoriesContent
	},
	data() {
		return {
			swiperOptions: {
				centeredSlides: true,
				slidesPerView: "auto",
				slideToClickedSlide: true
			}
		};
	},
	methods: {
		prevSlide() {
			this.setCurrentStory(this.currentStory - 1);
			this.$refs.promoStories.swiper.slidePrev();
		},
		nextSlide() {
			this.setCurrentStory(this.currentStory + 1);
			this.$refs.promoStories.swiper.slideNext();
		},
		...mapMutations("promoStories", ["setCurrentStory"]),
		...mapActions("promoStories", ["closeStories"])
	},
	computed: {
		...mapState("promoStories", {
			promoStoriesOpend: state => state.openStories,
			currentStory: state => state.currentStory
		}),
		...mapState("promoSlider", {
			promoSliderContent: state => state.sliderContent
		}),
		promoSliderContentSize() {
			return size(this.promoSliderContent);
		}
	},
	watch: {
		promoStoriesOpend(state) {
			if (state === true) {
				this.$nextTick(() => {
					this.$refs.promoStories.swiper.slideTo(this.currentStory);
				});
			}
		}
	}
};
</script>
