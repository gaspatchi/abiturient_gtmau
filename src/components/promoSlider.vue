<template>
	<div :class="['promo-slider',{'promo-slider_open':promoSliderOpen}]">
		<div class="container">
			<div class="promo-slider__wrapper">
				<div class="promo-slider__button-open" @click="openPromoSlider()"></div>
				<div class="promo-slider__button-close" @click="closePromoSlider()"></div>
				<swiper
					class="promo-slider__container"
					v-if="sliderLoaded"
					:options="swiperOptions"
					ref="promoSlider"
				>
					<swiper-slide
						class="promo-slider__slide-wrapper"
						v-for="(slide, index) in promoSliderContent"
						:key="slide.id"
					>
						<div
							class="promo-slider__slide"
							:style="{ backgroundImage: `url('${slide.acf.preview.url}')` }"
							@click="openStory(index)"
						>
							<div class="promo-slider__stories-indicator">
								<span v-for="image in slide.acf.images" :key="image.id"></span>
							</div>
							<div class="promo-slider__text-wrapper">
								<div class="promo-slider__text">
									<h3 v-html="slide.acf.title"></h3>
									<p v-html="slide.acf.subtitle"></p>
								</div>
							</div>
						</div>
					</swiper-slide>
				</swiper>
				<div v-else class="promo-slider__preloader">
					<div v-for="i in [0,1,2,3]" :key="i"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mapMutations, mapActions, mapState } from "vuex";
export default {
	name: "promoSlider",
	components: {
		swiper,
		swiperSlide
	},
	data() {
		return {
			swiperOptions: {
				slidesPerView: "auto",
				mousewheel: true
			}
		};
	},
	created() {
		this.loadPromoSliderSlides();
	},
	methods: {
		...mapMutations("promoSlider", {
			openPromoSlider: "openSlider",
			closePromoSlider: "closeSlider"
		}),
		...mapActions("promoSlider", {
			loadPromoSliderSlides: "loadContent"
		}),
		...mapActions("promoStories", ["openStory"])
	},
	computed: {
		...mapState("promoSlider", {
			promoSliderOpen: state => state.sliderOpen,
			sliderLoaded: state => state.sliderLoaded,
			promoSliderContent: state => state.sliderContent
		})
	}
};
</script>
