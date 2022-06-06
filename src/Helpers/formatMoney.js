
export default function formatMoney(regularPrice, currency) {
    return new Intl.NumberFormat(
        "ja-JP",
        { style: 'currency', currency: currency, maximumFractionDigits: 0 }
    ).format(regularPrice);
}
