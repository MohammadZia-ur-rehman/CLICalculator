import figlet from "figlet";
import gradient from "gradient-string";

async function welcome() {
    console.clear();
    console.log(`CLI Calculator (Author: M. Zia Ur Rehman)`);
    // figlet(`CLI Calculator`, (err, data) => {
    //     console.log(
    //         ` ${gradient.pastel.multiline(data)} (Author: M. Zia Ur Rehman)`
    //     );
    // });
}

export default welcome;
