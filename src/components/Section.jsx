export default function Section({title,  children, ...props}){
    return (<section {...props}>
        {/*edw to props gyrnaei ola ta props elements*/}
        <h2>{title}</h2>
        {children}
    </section>);
}