import { Button } from "./ui/button"

const CallToAction = () => {
    return (
        <section className="">
            <div className="flex items-center justify-center gap-5 m-auto">
                <Button size='lg' variant='outline'>Projects</Button>
                <Button className='border border-red-500 border-solid' size='lg'>Contact</Button>

            </div>

        </section>
    )
}
export default CallToAction