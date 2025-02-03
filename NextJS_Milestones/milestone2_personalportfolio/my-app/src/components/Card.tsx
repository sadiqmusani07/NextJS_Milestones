import Image from 'next/image';

interface CardProps {
    title: string;
    imageUrl: string;
}

export default function Card({ title, imageUrl }: CardProps) {
    return (
        <div className="card">
            <Image src={imageUrl} alt={title} width={50} height={50} />
            <h3>{title}</h3>
        </div>
    );
}
