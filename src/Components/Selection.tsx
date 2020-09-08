import React, { useEffect, useState } from 'react'
// import { fetchCategory } from '../Services/QuizServices'
// import { selectionPropsTypes, QuizQuestion } from '../Types/QuizType'

export const Selection = () => {
//  let [category, setCategory] = useState<QuizQuestion[]>();
//     let [state, setState] = useState<string>("");
//   let [level, setLevel] = useState<string>("easy");
    
//     useEffect(() => {
//         async function fetchApi() {
//             var result: QuizQuestion[] = await fetchCategory();


//             setCategory(result);
//             setState(result[0].category);

//         }
//         fetchApi();
//     }, [setCategory]);
   

//     category?.map((c) => {
//         console.log(c.category);
//     })

    // function change(event: React.FormEvent<HTMLSelectElement>) {
    //     // No longer need to cast to any - hooray for react!
    //     event.preventDefault();
    //     var safeSearchTypeValue: string = event.currentTarget.value;

    //     console.log(safeSearchTypeValue); // in chrome => B
    //     console.log("hello Wold");
    //     setState(
    //         safeSearchTypeValue
    //     );
    // }
    // function changeLevel(event: React.FormEvent<HTMLSelectElement>) {
    //     // No longer need to cast to any - hooray for react!
    //     var safeSearchTypeValue: string = event.currentTarget.value;

    //     console.log(safeSearchTypeValue); // in chrome => B
    //     console.log("hello Wold");
    //     setLevel(
    //         safeSearchTypeValue
    //     );
    // }
    // function handleQuestionNumber(e:React.FormEvent<EventTarget>){
    //     e.preventDefault();
       
    

    // }




    return (
        <div>
            {/* <form onSubmit={(e)=>{
                handleQuestionNumber(e);
            }}>
                <label>
                    Select Different Categorires
                </label>
                <select value={state} onChange={e => change(e)}>


                    {
                        category?.map((c, ind) => {
                            return (
                                <option value={c.category} key={ind}>{c.category}</option>
                            )
                        })
                    }

                </select>
                // {}
                <label>
                    Select Different Level
                </label>
                <select value={level} onChange={e => changeLevel(e)}>


                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">hard</option>


                </select>
                <input type="submit" value="submit"/>

            </form> */}


        </div>
    )

}
