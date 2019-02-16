<template>
	<div class="questions" id="questions">
		<div class="container">
			<div class="row">
				<div class="col-12 col-xl-9">
					<div class="questions__title">
						<h2>Вопросы и ответы</h2>
					</div>
					<div class="questions__text">
						<p>
							Ниже рассмотрены самые популярные вопросы которые могут возникнуть при поступлении.
							Ответы даны в максимально понятном и развернутом виде.
							Вы так же можете задать нам свой вопрос через специальную форму обратной сыязи
						</p>
					</div>
					<div class="questions__questions" v-if="questionsLoaded">
						<question
							v-for="(question, index) in questionsContent"
							:key="question.id"
							:questionTitle="question.acf.question"
							:questionAnswer="question.acf.answer"
							data-aos="zoom-in-up"
							:data-aos-delay="index*100"
						></question>
					</div>
					<div v-else class="questions__questions_loder">
						<div class="questions__question" v-for="i in [0,1,2]" :key="i"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import { mapState, mapActions } from "vuex";
import question from "./question";

export default {
	name: "questions",
	components: {
		question
	},
	created() {
		this.fetchContent();
	},
	methods: {
		...mapActions("questions", ["fetchContent"])
	},
	computed: {
		...mapState("questions", {
			questionsLoaded: state => state.questionsLoaded,
			questionsError: state => state.questionsError,
			questionsContent: state => state.questionsContent
		})
	}
};
</script>
