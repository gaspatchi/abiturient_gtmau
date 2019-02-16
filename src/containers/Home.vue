<template>
	<div>
		<feedbackForm/>
		<promoStories/>
		<promo/>
		<about/>
		<professions/>
		<steps/>
		<questions/>
		<feedback/>
	</div>
</template>

<script>
import "swiper/dist/css/swiper.css";

import promoStories from "@/components/promoStories/promoStories";
import promo from "@/components/promo";
import about from "@/components/about";
import professions from "@/components/professions";
import steps from "@/components/steps";
import questions from "@/components/questions/questions";
import feedback from "@/components/feedback";
import feedbackForm from "@/components/feedbackForm";

export default {
	name: "HomePage",
	components: {
		promoStories,
		promo,
		about,
		professions,
		steps,
		questions,
		feedback,
		feedbackForm
	}
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>

