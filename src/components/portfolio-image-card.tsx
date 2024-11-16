import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import {
    Dialog,
    DialogContent, DialogHeader,
    DialogTrigger,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {list} from "postcss";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";

type Props =  {
    image_id: number;
    title: string;
    description: string;
    current_image: string;
    sub_images: readonly string[];
    tags: readonly string[];
}

export function PortfolioImageCard({
    image_id,
    title,
    current_image,
    description,
    sub_images,
    tags,
}: Props) {

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Card
                        className={
                            "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
                        }
                    >
                        <Image
                            src={current_image}
                            alt={title}
                            width={500}
                            height={300}
                            className="h-40 w-full overflow-hidden object-cover object-top"
                        />
                        <CardHeader className="px-2">
                            <div className="space-y-1">
                                <CardTitle className="mt-1 text-base">{title}</CardTitle>
                                <Markdown
                                    className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                                    {description}
                                </Markdown>
                            </div>
                        </CardHeader>
                        <CardContent className="mt-auto flex flex-col px-2">
                            {tags && tags.length > 0 && (
                                <div className="mt-2 flex flex-wrap gap-1">
                                    {tags?.map((tag) => (
                                        <Badge
                                            className="px-1 py-0 text-[10px]"
                                            variant="secondary"
                                            key={tag}
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                        <CardFooter className="px-2 flex items-center justify-end pb-2">

                        </CardFooter>
                    </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-3xl w-3xl">
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>
                            {description}
                        </DialogDescription>
                    </DialogHeader>
                    <Carousel className="w-full max-w-3xl max-h-full">
                        <CarouselContent>
                            {sub_images.map((image, img_index) => (
                                <CarouselItem key={img_index}>
                                    <div className="p-1">
                                        <div className="flex aspect-video items-center justify-center relative">
                                            <img
                                                src={image}
                                                alt={image}
                                                className="rounded-md object-contain w-full h-full"
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                    </Carousel>
                </DialogContent>
            </Dialog>
        </div>
    );
}
