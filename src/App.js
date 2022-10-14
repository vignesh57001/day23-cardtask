import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaughWink } from '@fortawesome/free-solid-svg-icons';

function App() {
  var cardDetails = [
    {
      planName: "Free",
      price: 0,
      features: [
        {
          name: "Single User",
        },
        {
          name: "5GB Storage",
        },
        {
          name: "Unlimited Public Projects",
        },
        {
          name: "Community Access",
        },
        
        {
          name: "Unlimited Private Projects",
        },
        {
          name: "Dedicated Phone Support",
        },
        {
          name: "Free Subdomain",

        },
        {
          name: "Monthly Status Reports"
        }
      ],
    },
    {
      planName: "Plus",
      price: 9,
      features: [
        {
          name: "5 Users",
        },
        {
          name: "50GB Storage",
        },
        {
          name: "Unlimited Public Projects",
        },
        {
          name: "Community Access",
        },
        {
          name: "Unlimited Private Projects",
        },
        {
          name: "Dedicated Phone Support",
        },
        {
          name: "Free Subdomain",

        },
        {
          name: "Monthly Status Reports"
        }
      ]
    },
    {
      planName: "Pro",
      price: 49,
      features: [
        {
          name: "Unlimited Users",
        },
        {
          name: "150GB Storage",
        },
        {
          name: "Unlimited Public Projects",
        },
        {
          name: "Community Access",
        },
        {
          name: "Unlimited Private Projects",
        },
        {
          name: "Dedicated Phone Support",
        },
        {
          name: "Unlimited Free Subdomains",
        },
        {
          name: "Monthly Status Reports"
        }

      ]
    }
  ]
  return (
    <section className="pricing py-5" >
      <header className="header">Price Cards</header>
      <div className="container">
        <div className="row">


          {
            cardDetails.map((card) => {
              return <Card card={card} ></Card>;
            })}
        </div>
      </div >
    </section >
  );


}

export default App;