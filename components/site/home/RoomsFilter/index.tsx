import { Content } from "@/components/layout";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { DateAndTimePicker } from "@/components/ui/DateTimePicker";
import { InputNumber } from "@/components/ui/InputNumber";
import { Locale } from "@/i18n-config";
import Form from "next/form";

export function RoomsFilter({ lang }: { lang: Locale }) {
  return (
    <>
      <Container containerClass="max-w-4xl mx-auto">
        <Content>
          <h2 className="py-6 text-center text-2xl font-bold">
            Start booking today!
          </h2>
          <article className="h-full w-full rounded-lg border bg-secondary p-2 max-[754px]:flex max-[754px]:flex-col">
            <Form
              action={`/${lang}/habitaciones`}
              className="grid h-full w-full grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 items-center justify-center gap-0 lg:gap-5 rounded-lg bg-secondary/20 p-4 lg:p-5"
            >
              <div className="flex items-center justify-center gap-4 max-[754px]:gap-8">
                <InputNumber
                  name="adultsCount"
                  inputNumberLabel="Adults"
                  iconName="FaUser"
                  iconSize={13}
                />
                <InputNumber
                  name="childrensCount"
                  inputNumberLabel="Children"
                  iconName="FaChild"
                  iconSize={16}
                />
              </div>
              <div className="flex flex-col lg:flex-row lg:gap-4">
                <DateAndTimePicker
                  lang={lang}
                  granularity="minute"
                  icon="calendar"
                  hideIcon={true}
                  label="Check In"
                  minDate={new Date(new Date().setHours(0, 0, 0, 0))}
                  displayFormat={{ hour12: "MM/dd/yyyy hh:mm a" }}
                  inputName="checkIn"
                />
                <Button className="mt-5 p-5 lg:p-4.25" type="submit">
                  Search Room
                </Button>
              </div>
            </Form>
          </article>
        </Content>
      </Container>
    </>
  );
}
