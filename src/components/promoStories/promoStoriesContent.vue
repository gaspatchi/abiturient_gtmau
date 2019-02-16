<template>
	<div class="story-content__wrapper">
		<div class="story-content__button-prev" v-if="showPrev" @click="prevImage"></div>
		<div class="story-content__button-next" v-if="showNext" @click="nextImage"></div>
		<div class="story-content__progress-bar">
			<div class="story-content__progress_wrapper">
				<div class="story-content__progress" :style="width"></div>
			</div>
		</div>
		<div class="story-content__button-close hidden-md-up" @click="closeStories()"></div>
		<transition name="fade-slide">
			<div
				class="story-content__image"
				v-for="(image, index) in storyImages"
				:key="image.id"
				v-if="currentImageIndex == index"
			>
				<div class="story-content__image" :style="{ backgroundImage: `url('${image.url}')` }"></div>
			</div>
		</transition>
	</div>
</template>

<script>
import size from "lodash/size";
export default {
	name: "promoStoriesContent",
	props: ["currentStoryIndex", "slidesTotal", "storyImages"],
	data() {
		return {
			currentImage: 1,
			currentImageIndex: 0
		};
	},
	methods: {
		closeStories() {
			this.$emit("closeStories");
		},
		nextImage() {
			if (this.currentImage !== this.totalStoryImages) {
				this.currentImage = this.currentImage + 1;
				this.currentImageIndex = this.currentImageIndex + 1;
			} else {
				this.$emit("nextSlide");
				this.currentImage = 1;
				this.currentImageIndex = 0;
			}
		},
		prevImage() {
			if (this.currentImage > 1) {
				this.currentImage = this.currentImage - 1;
				this.currentImageIndex = this.currentImageIndex - 1;
			} else {
				this.$emit("prevSlide");
				this.currentImage = 1;
				this.currentImageIndex = 0;
			}
		}
	},
	computed: {
		totalStoryImages() {
			return size(this.$props.storyImages);
		},
		realSlideIndex() {
			return this.$props.currentStoryIndex + 1;
		},
		width() {
			return {
				width: (this.currentImage / this.totalStoryImages) * 100 + "%"
			};
		},
		showNext() {
			if (
				this.realSlideIndex === this.$props.slidesTotal &&
				this.currentImage === this.totalStoryImages
			) {
				return false;
			} else {
				return true;
			}
		},
		showPrev() {
			if (this.realSlideIndex === 1 && this.currentImage === 1) {
				return false;
			} else {
				return true;
			}
		}
	}
};
</script>
