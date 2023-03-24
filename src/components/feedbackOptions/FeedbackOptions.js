import { Option, ListOptions } from "./FeedbackOptions.styled";


export default function FeedbackOptions({ options, onLeaveFeedback }) {
    const names = Object.keys(options);
    return ( <>
        <ListOptions>
            {names.map((name, index) => (<li key={index}>
                <Option type="button"
                    name={name} onClick={onLeaveFeedback}>{name}</Option>
            </li>)) 

     }
      </ListOptions>
       </> 
    )
}