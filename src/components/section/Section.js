import { Block, SectionTitle } from "./Section.styled"

export default function Section({ title, children }) {
    return (<Block>
        <SectionTitle>{title}</SectionTitle>
        {children}
    </Block>
    )
}