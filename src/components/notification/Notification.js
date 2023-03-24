export default function Notification({ options, message }) {
    const { good, neutral, bad } = options;
    return (
        good + neutral + bad === 0 && (<h1>{message}</h1>)
    )
}