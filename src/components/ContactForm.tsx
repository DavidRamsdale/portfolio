import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { Button } from "@/components/common/Button";
import emailjs from "@emailjs/browser";
import { TOAST_OPTIONS } from "@/constants/options";

interface FormData {
  Name: string;
  Email: string;
  Message: string;
}

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_name: "David",
          from_name: data.Name,
          from_email: data.Email,
          message: data.Message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("Email was sent successfully sent!", TOAST_OPTIONS);
        },
        () => {
          toast.error(
            "Something went wrong sending the email, please try again later.",
            TOAST_OPTIONS
          );
        }
      );
  };

  return (
    <div className="w-full max-w-sm z-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <h2 className="text-2xl font-semibold pb-2">Contact Me</h2>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Name"
            type="text"
            placeholder="Name"
            {...register("Name", {
              required: "Name is required",
            })}
          />
          {errors.Name && (
            <p className="text-red-500 text-xs italic">{errors.Name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Email"
            type="text"
            placeholder="Email"
            {...register("Email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.Email && (
            <p className="text-red-500 text-xs italic">
              {errors.Email.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Message"
          >
            Your Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24 max-h-36"
            id="Message"
            placeholder="Your Message"
            {...register("Message", { required: "Message is required" })}
          />
          {errors.Message && (
            <p className="text-red-500 text-xs italic">
              {errors.Message.message}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};
