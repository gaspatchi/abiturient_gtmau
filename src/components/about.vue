<template>
	<div class="about" id="about">
		<div class="about__title" data-aos="zoom-in" data-aos-offset="100">Почему именно мы</div>
		<div v-if="aboutLoaded" class="about__links">
			<a
				:class="[{'about_active-button': aboutCurrentPost === index},'button about_links-button']"
				v-for="(link, index) in aboutContent"
				:key="link.id"
				v-html="link.acf.link_title"
				@click="setCurrentPost(index)"
			></a>
		</div>
		<div v-else class="about__links-preloader">
			<div class="about__links">
				<a class="button about_links-button about_active-button">
					<span style="padding-right: 100px"></span>
				</a>
				<a class="button about_links-button">
					<span style="padding-right: 100px"></span>
				</a>
			</div>
		</div>
		<div class="about__content container">
			<div class="row">
				<div class="col-12 col-md-10 col-lg-12 col-xl-8">
					<div class="row">
						<div class="col-12 col-md-5 col-lg-4 col-xl-6 max_zi" data-aos="fade-right">
							<div class="about__text-block" v-if="aboutLoaded">
								<transition-group name="fade">
									<h1 v-html="currentPost.title" :key="1"></h1>
									<p v-html="currentPost.text" :key="2"></p>
								</transition-group>
							</div>
							<div class="about__text-block about__text-block_loader" v-else>
								<loader/>
							</div>
						</div>
						<div class="col-12 col-md-7 col-lg-5 col-xl-6" data-aos="fade-left">
							<transition name="fade">
								<div
									class="about__media-block"
									:style="{ backgroundImage: `url('${currentPost.image.url}')` }"
									v-if="aboutLoaded"
								></div>
								<div class="about__media-block about__media-block_loader" v-else></div>
							</transition>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import { mapState, mapActions, mapMutations } from "vuex";
import isEmpty from "lodash/isEmpty";
import loader from "@/components/loader";
export default {
	name: "about",
	components: {
		loader
	},
	created() {
		this.fetchAboutContent();
	},
	methods: {
		...mapMutations("about", ["setCurrentPost"]),
		...mapActions("about", {
			fetchAboutContent: "fetchContent"
		})
	},
	computed: {
		currentPost() {
			if (isEmpty(this.aboutContent)) {
				return {
					title: "",
					text: "",
					image: {
						url: ""
					}
				};
			} else {
				return this.aboutContent[this.aboutCurrentPost].acf;
			}
		},
		...mapState("about", {
			aboutLoaded: state => state.aboutLoaded,
			aboutError: state => state.aboutError,
			aboutContent: state => state.aboutContent,
			aboutCurrentPost: state => state.aboutCurrentPost
		})
	}
};
</script>
