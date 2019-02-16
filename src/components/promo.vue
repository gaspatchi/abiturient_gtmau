<template>
	<div class="promo">
		<div class="container">
			<div class="promo__girl"></div>
			<div class="promo__navbar">
				<div class="promo__menu hidden-md-up">
					<div class="promo__burger" @click="openMobileMenu()">
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div :class="[{'mobile-menu_opend': mobileMenuState},'mobile-menu']">
						<div class="container">
							<div class="mobile-menu__header">
								<div class="promo__burger" @click.prevent="closeMobileMenu()">
									<span></span>
									<span></span>
									<span></span>
								</div>
								<div class="mobile-menu__title">
									<h4>Разделы сайта</h4>
								</div>
							</div>
							<ul class="mobile-menu__links">
								<li>
									<a class="mobile-menu__link" @click="toAnchor('#about')">
										<div class="mobile-menu__link-image"></div>О нас
									</a>
								</li>
								<li>
									<a class="mobile-menu__link" @click="toAnchor('#specialty')">
										<div class="mobile-menu__link-image"></div>Специальности
									</a>
								</li>
								<li>
									<a class="mobile-menu__link" @click="toAnchor('#questions')">
										<div class="mobile-menu__link-image"></div>Частые вопросы
									</a>
								</li>
								<li>
									<a class="mobile-menu__link" @click="toAnchor('#feedback')">
										<div class="mobile-menu__link-image"></div>Связь с нами
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="promo__colledge_name">ГБПОУ ГТМАУ</div>
				<div class="links hidden-xs-down">
					<ul class="links__group">
						<li class="links__item">
							<a class="links__link" @click="toAnchor('#about')">О нас</a>
						</li>
						<li class="links__item">
							<a class="links__link" @click="toAnchor('#specialty')">Специальности</a>
						</li>
						<li class="links__item">
							<a class="links__link" @click="toAnchor('#questions')">Частые вопросы</a>
						</li>
						<li class="links__item">
							<a class="links__link" @click="toAnchor('#feedback')">Связь с нами</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="promo-welcome">
				<div class="promo-welcome__text">
					<h1>Поступление {{new Date().getFullYear()}}</h1>
					<p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.</p>
				</div>
				<div class="promo-welcome__buttons">
					<a
						class="button button_shadow promo-welcome_button"
						@click="toAnchor('#about')"
					>Начать знакомство</a>
					<a
						class="button button_shadow button_green promo-welcome_button"
						@click="openForm()"
					>Связаться с нами</a>
				</div>
			</div>
		</div>
		<promoSlider/>
	</div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import promoSlider from "./promoSlider";
export default {
	name: "promo",
	components: {
		promoSlider
	},
	methods: {
		toAnchor(anchor) {
			this.mobileMenuState === true
				? setTimeout(() => this.$scrollTo(anchor), 230)
				: this.$scrollTo(anchor);
			this.closeMobileMenu();
		},
		...mapMutations("mobileMenu", {
			openMobileMenu: "openMenu",
			closeMobileMenu: "closeMenu"
		}),
		...mapMutations("feedbackForm", ["openForm"])
	},
	computed: {
		...mapState("mobileMenu", { mobileMenuState: state => state.open })
	}
};
</script>
