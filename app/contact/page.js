import Container from "@/components/Container";
import Form from "@/components/Form";

export const metadata = {
  title: "Bill Yu | Contact",
  description: "Send me a message!",
};

export default function Page() {
  return (
    <Container>
      <h1 className="text-3xl sm:text-5xl font-bold mt-4 md:mt-8 text-center">
        Get in Touch
      </h1>
      <Form />
    </Container>
  );
}
