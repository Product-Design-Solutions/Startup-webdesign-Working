import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

export function test() {
  return (
    <div className="relative w-full">
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <img
              src="/placeholder.svg"
              alt="Slide 1"
              width="1200"
              height="600"
              className="object-cover w-full h-[600px]"
              style={{ aspectRatio: "1200/600", objectFit: "cover" }}
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/placeholder.svg"
              alt="Slide 2"
              width="1200"
              height="600"
              className="object-cover w-full h-[600px]"
              style={{ aspectRatio: "1200/600", objectFit: "cover" }}
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/placeholder.svg"
              alt="Slide 3"
              width="1200"
              height="600"
              className="object-cover w-full h-[600px]"
              style={{ aspectRatio: "1200/600", objectFit: "cover" }}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 bg-background/50 rounded-full p-2 hover:bg-background/75 focus:bg-background/75 focus:outline-none">
          <ChevronLeftIcon className="w-6 h-6 text-primary-foreground" />
        </CarouselPrevious>
        <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 bg-background/50 rounded-full p-2 hover:bg-background/75 focus:bg-background/75 focus:outline-none">
          <ChevronRightIcon className="w-6 h-6 text-primary-foreground" />
        </CarouselNext>
      </Carousel>
    </div>
  )
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
