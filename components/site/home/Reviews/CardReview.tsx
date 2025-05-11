import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { StarsRating } from "@/components/features";

export function CardReview() {
  return (
    <Card className="py-0 overflow-hidden  max-w-lg gap-0">
      <CardHeader className="bg-secondary p-1">
        <div className="flex items-center space-x-4 relative w-full">
          <div className="max-w-20 absolute top-2 left-3 overflow-hidden rounded-md bg-secondary p-1.5">
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="shadow-2xl rounded-lg overflow-hidden"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="pl-28 w-full">
            <p className="text-xs font-normal text-muted-foreground text-right p-2">
              05/12/2025
            </p>
            <p className="text-md font-bold text-left">Roman Feliz</p>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-xs py-2 pt-6 leading-relaxed">
          This is me sharing my lovely experience while staying at the hotel
          quinto nivel RD.
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col items-start justify-between w-full py-2">
        <div className="flex items-center gap-2 justify-start w-full">
          <h5 className="uppercase text-xs font-bold">Rated Us 4.5</h5>
          <StarsRating rating={4.5} />
        </div>
        <div className="flex items-center justify-start w-full text-xs gap-4">
          <h6 className="text-muted-foreground">
            Rooms: <span className="text-primary ml-1">5</span>
          </h6>
          <h6 className="text-muted-foreground">
            Location: <span className="text-primary ml-1">2</span>
          </h6>
          <h6 className="text-muted-foreground">
            Service: <span className="text-primary ml-1">2</span>
          </h6>
        </div>
      </CardFooter>
    </Card>
  );
}
