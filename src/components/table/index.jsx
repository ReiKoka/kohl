import clsx from "clsx";
import { useCart } from "../../hooks/useCart";

export const Table = () => {
  const { cart, onRemove, onQuantityChange } = useCart();
  const totalCircles = 5;
  const positions = Array.from({ length: totalCircles }, (_, i) => i + 1);

  return (
    <div style={{ width: "100%", overflow: "auto" }}>
      <table
        style={{ minWidth: 600 }}
        className="bg-base-200 mt-4 w-full rounded-md border border-gray-300 text-left text-sm text-gray-500 shadow-md"
      >
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Item</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Category
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Acidity
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Quantity
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img src={item.image} style={{ width: 40, height: 40 }} />
                <span className="font-primary text-secondary">
                  {item.primaryName}
                </span>
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {item.category}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {positions.map((position) => {
                  const ratingValue = Math.max(
                    1,
                    Math.min(item.aciditySweetnessRatio || 1, totalCircles),
                  );
                  const isSelected = position === ratingValue;
                  return (
                    <span
                      key={position}
                      className={clsx(
                        "border-base-content ml-1 inline-block h-3 w-3 rounded-full border leading-0 md:h-4 md:w-4",
                        {
                          "bg-primary border-primary": isSelected,
                        },
                      )}
                    ></span>
                  );
                })}
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                }}
              >
                <input
                  type="number"
                  min="1"
                  value={item.quantity || 1}
                  onChange={(e) =>
                    onQuantityChange(index, parseInt(e.target.value, 10))
                  }
                  className="w-16 rounded-md border px-2 py-1 text-right"
                />
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                <button
                  onClick={() => onRemove(index)}
                  className="btn btn-primary font-primary focus-visible:ring-primary btn-sm ring-offset-base-300 md:btn-sm xl:btn-sm pointer-events-auto rounded-full outline-0 focus-visible:ring-2 focus-visible:ring-offset-2"
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
