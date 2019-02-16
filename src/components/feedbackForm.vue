<template>
	<transition name="fade">
		<div class="feedback-form" v-if="formOpend">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="feedback-form__wrapper" :class="{'feedback-form__wrapper_sended': formSended}">
							<div class="feedback-form__close-button" @click="closeForm()"></div>
							<div class="feedback_main-frame">
								<div class="feedback-form__title">
									<h2>Оставьте обращение</h2>
									<h5>Напишите Ваш вопрос и мы обязательно с вами свяжемся</h5>
								</div>
								<div class="row">
									<div class="col-12 col-lg-6">
										<div class="feedback-form__input" :class="{feedback_form__error: errors.has('Имя')}">
											<input
												type="text"
												placeholder="Имя"
												v-validate="'required|min:2|max:15'"
												data-vv-delay="1000"
												name="Имя"
												v-model="firstname"
											>
											<span></span>
											<div class="feedback-form__error-alert" v-html="errors.first('Имя')"></div>
										</div>
										<div class="feedback-form__input" :class="{feedback_form__error: errors.has('Фамилия')}">
											<input
												type="text"
												v-validate="'required|min:2|max:15'"
												data-vv-delay="1000"
												name="Фамилия"
												placeholder="Фамилия"
												v-model="lastname"
											>
											<span></span>
											<div class="feedback-form__error-alert" v-html="errors.first('Фамилия')"></div>
										</div>
										<div class="feedback-form__input" :class="{feedback_form__error: errors.has('Телефон')}">
											<input
												type="text"
												v-validate="'required|min:11|max:11'"
												data-vv-delay="1000"
												name="Телефон"
												placeholder="8 (___) __-__-___"
												v-model="number"
											>
											<span></span>
											<div class="feedback-form__error-alert" v-html="errors.first('Телефон')"></div>
										</div>
										<div class="feedback-form__input" :class="{feedback_form__error: errors.has('Email')}">
											<input
												v-validate="'required|email|min:2|max:50'"
												data-vv-delay="1000"
												name="Email"
												type="text"
												placeholder="Email"
												v-model="email"
											>
											<span></span>
											<div class="feedback-form__error-alert" v-html="errors.first('Email')"></div>
										</div>
									</div>
									<div class="col-12 col-lg-6">
										<div
											class="feedback-form__textarea"
											:class="{feedback_form__error: errors.has('Обращение')}"
										>
											<h4>Ваш вопрос</h4>
											<textarea
												resize="disabled"
												v-validate="'required|min:10'"
												name="Обращение"
												placeholder="Я хотел бы узнать..."
												v-model="text"
											></textarea>
											<div class="feedback-form__error-alert" v-html="errors.first('Обращение')"></div>
										</div>
									</div>
									<div class="feedback-form__send col-12 col-lg-6">
										<a class="button button_shadow feedback-form_button" @click="sendFeedbackForm">Отправить</a>
										<span>Все поля являются обязательными к заполнению</span>
									</div>
									<div class="feedback-form_privacy col-12 col-lg-6">
										<p>
											Нажимая на кнопку «Отправить», вы соглашаетесь с
											<a
												href="https://xn----etbgb7bzaw.xn--p1ai/page/9240"
												target="__blank"
											>Политикой конфиденциальности</a>
										</p>
									</div>
								</div>
							</div>
							<div class="feedback-form__successful">Спасибо за обращение</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import punycode from "punycode";
export default {
	name: "feedbackForm",
	data() {
		return {
			firstname: "",
			lastname: "",
			number: "",
			email: "",
			text: ""
		};
	},
	methods: {
		async sendFeedbackForm() {
			let status = await this.$validator.validateAll();
			console.log(status);
			if (status) {
				this.postFeedbackForm({
					firstname: this.firstname,
					lastname: this.lastname,
					number: this.number,
					email: punycode.toASCII(this.email),
					text: this.text
				});
			}
		},
		...mapMutations("feedbackForm", ["closeForm"]),
		...mapActions("feedbackForm", ["postFeedbackForm"])
	},
	computed: {
		...mapState("feedbackForm", {
			formOpend: state => state.formOpend,
			formSended: state => state.formSended
		})
	}
};
</script>
