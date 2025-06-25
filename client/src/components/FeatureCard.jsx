import { MdOutlineInventory2, MdAddShoppingCart } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import { LuClockAlert } from "react-icons/lu";

function FeatureCard() {
  const cardDetails = [
    {
      id: 1,
      icon: <MdOutlineInventory2 aria-hidden="true" />,
      title: "Inventory Tracker",
      description:
        "Keep a clear view of everything in your pantry. Effortlessly add, update, and track all your ingredients so you always know what you have on hand.",
    },
    {
      id: 2,
      icon: <BiFoodMenu aria-hidden="true" />,
      title: "Recipe Matches",
      description:
        "Find delicious recipes based on what’s already in your pantry. Minimize food waste and make meal planning easier by using what you already own.",
    },
    {
      id: 3,
      icon: <LuClockAlert aria-hidden="true" />,
      title: "Expiry Alerts",
      description:
        "Never let food go to waste. Get notified about items that are nearing their expiration date so you can use them in time.",
    },
    {
      id: 4,
      icon: <MdAddShoppingCart aria-hidden="true" />,
      title: "Shopping List",
      description:
        "Easily build and manage shopping lists based on your pantry stock. Stay organized on your next grocery run and avoid buying duplicates.",
    },
  ];

  return (
    <section className="dark:bg-gray-900 bg-white px-4 py-12 mx-auto max-w-7xl">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 dark:text-gray-100 text-gray-900">
        Features
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardDetails.map((card) => (
          <article
            key={card.id}
            className="flex flex-col items-center text-center border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800 transition-shadow hover:shadow-md"
          >
            <div className="text-brand-green dark:text-brand-green-dark text-5xl mb-4">
              {card.icon}
            </div>
            <h2 className="text-lg md:text-xl font-semibold mb-2 dark:text-gray-100 text-gray-900">
              {card.title}
            </h2>
            <p className="prose prose-sm dark:prose-invert text-gray-600 dark:text-gray-300 leading-relaxed">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeatureCard;
