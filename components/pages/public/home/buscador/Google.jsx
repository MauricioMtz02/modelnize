import Image from "next/image"

const Google = () => {
    return (
        <div>
            <Image
                src={`/img/google.svg`}
                alt={'google icon'}
                width={68}
                height={23}
            />
        </div>
    )
}

export default Google