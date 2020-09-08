import { QuestionType, QuizType } from './../Types/QuizType';

// export const fetchCategory=async():Promise<QuizQuestion[]>=>{
//     let url="https://opentdb.com/api.php?amount=10";
//     var res=await fetch(url);
//     var {results}=await res.json();
//     //console.log(results);


    
//     const quiz:QuizQuestion[]=results.map((questionObj:Quiz)=>{
//         return {
//             category:questionObj.category,
//         }
//     })
//     return quiz;
// }

// export const fetchQuiz=async():Promise<QuizQuestion[]>=>{
//     let url=`https://opentdb.com/api.php?amount=10`;
//     var res=await fetch(url);
//     var {results}=await res.json();
//     //console.log(results);


//     function shuffle(array:any[]) {
//         var currentIndex = array.length, temporaryValue, randomIndex;
      
//         // While there remain elements to shuffle...
//         while (0 !== currentIndex) {
      
//           // Pick a remaining element...
//           randomIndex = Math.floor(Math.random() * currentIndex);
//           currentIndex -= 1;
      
//           // And swap it with the current element.
//           temporaryValue = array[currentIndex];
//           array[currentIndex] = array[randomIndex];
//           array[randomIndex] = temporaryValue;
//         }
      
//         return array;
//       }
    
//     const quiz:QuizQuestion[]=results.map((questionObj:Quiz)=>{
//         return {
//             category:questionObj.category,
//             question:questionObj.question,
//             option:shuffle(questionObj.incorrect_answers.concat(questionObj.correct_answer)),
//             answer:questionObj.correct_answer

//         }
//     })
//     return quiz;
// }


const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)

export const getQuizDetails = async (totalQuestions: number, level: string): Promise<QuizType[]> => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`);
    let { results } = await res.json();
    const quiz: QuizType[] = results.map((questionObj: QuestionType) => {
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            correct_answer: questionObj.correct_answer,
            option: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }
    })
    return quiz;
}