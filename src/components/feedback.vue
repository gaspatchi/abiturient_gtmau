<template>
	<div class="feedback" id="feedback">
		<div class="container">
			<div class="feedback__title">
				<h2>Готовы обсудить Ваше поступление</h2>
			</div>
			<div class="feedback__contacts" data-aos="zoom-in-up">
				<div class="feedback_contact feedback__contact_phone">8 (87951) 5-12-58</div>
				<div class="feedback_contact feedback__contact_mail">geo-teh@mail.ru</div>
				<div
					class="feedback_contact feedback__contact_address"
				>Калинина ул., д.111, Октябрьская ул., д. 59.</div>
			</div>
			<div class="row">
				<div class="col-12 col-md-6 col-lg-4">
					<div class="feedback__form" data-aos="zoom-in-down" data-aos-delay="200">
						<div class="feedback__message">
							<h4>Напишите нам мы поможем</h4>
							<p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.</p>
						</div>
						<div class="button feedback_button button_shadow" @click="openForm()">Обратиться</div>
					</div>
				</div>
				<div class="col-12 col-md-6 col-lg-8">
					<div class="feedback__map" data-aos="zoom-in-down" data-aos-delay="200">
						<yandex-map
							:coords="[44.133335, 43.453531]"
							style="width: 100%; height: 100%;"
							:behaviors="['drag','scrollZoom','multiTouch']"
							:controls="['fullscreenControl','geolocationControl','zoomControl','typeSelector']"
						>
							<ymap-marker
								marker-id="1"
								marker-type="placemark"
								:coords="[44.133335, 43.453531]"
								hint-content="ГБПОУ ГТМАУ"
								:balloonTemplate="balloonTemplate"
								cluster-name="1"
							></ymap-marker>
						</yandex-map>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations } from "vuex";
import { yandexMap, ymapMarker } from "vue-yandex-maps";
export default {
	name: "feedback",
	components: {
		yandexMap,
		ymapMarker
	},
	methods: {
		...mapMutations("feedbackForm", ["openForm"])
	},
	computed: {
		balloonTemplate() {
			return `
			<h1 class="red">fafdawfawf</h1>
			<p>fawfawfawfawfefse wef wefwfwa</p>
			`;
		}
	}
};
</script>
