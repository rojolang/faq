import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel";
import {faqData} from '../components/faqData'; // Adjust the path as necessary

interface FAQProps {
    title: string;
    subtitle: string;
}

export function FAQ({ title, subtitle }: FAQProps) {
    return (
        <div key="1" className="px-4 py-6 md:px-6 md:py-12 lg:py-16 bg-black">
            <section className="prose prose-gray mx-auto max-w-6xl text-white">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem] text-center text-white">
                    {title}
                </h1>
                <h2 className="text-2xl font-bold tracking-tight lg:text-3xl text-center mt-8 text-white">
                    {subtitle}
                </h2>
                <Carousel className="mt-8">
                    <CarouselContent>
                        {faqData.map((faq, index) => (
                            <CarouselItem key={index}>
                                <Card className="bg-gray-800 max-w-md mx-auto md:max-w-xl lg:max-w-2xl">
                                    <CardHeader>
                                        <h3 className="text-lg font-bold text-white text-center">
                                            {faq.question}
                                        </h3>
                                    </CardHeader>
                                    <CardContent className="text-gray-300 text-lg leading-relaxed pt-1">
                                        <article id={faq.id}>
                                            <p>
                                                {faq.answer}
                                            </p>
                                        </article>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
        </div>
    );
}
