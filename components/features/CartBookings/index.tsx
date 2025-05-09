import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VariantProps } from "class-variance-authority";
import { List } from "lucide-react";
import { BookingsCounter } from "./BookingsCounter";
import { CardBooking } from "./CardBooking";

export function CartBookings({
  btnVariant,
}: {
  btnVariant: VariantProps<typeof Button>["variant"];
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={btnVariant}
          size="icon"
          className="relative bg-transparent"
        >
          <BookingsCounter />
          <List />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left">
            Rooms Added{" "}
            <span className="ml-2 rounded-full bg-muted px-4 text-sm">8</span>
          </SheetTitle>
          <SheetDescription className="flex gap-4 text-left text-xs">
            <span>
              Deposite:{" "}
              <span className="ml-2 font-bold text-primary">8,205</span>
            </span>
            <span>
              Total: <span className="ml-2 font-bold text-primary">4,105</span>
            </span>
          </SheetDescription>
        </SheetHeader>
        <div className="h-[calc(100%-12rem)] p-2">
          <ScrollArea className="h-full rounded-md">
            {Array.from({ length: 25 }).map((_, i) => (
              <CardBooking key={i} />
            ))}
          </ScrollArea>
        </div>
        <div className="!lg:flex-col flex w-full flex-col rounded-md border p-2 pt-0">
          <div className="py-2 text-center text-xs font-bold">Make Payment</div>
          <div className="grid grid-cols-2 gap-2">
            <Button type="submit" size="default">
              Deposite
            </Button>
            <Button type="submit" size="default">
              Full Amount
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
