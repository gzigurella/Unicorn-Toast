import { FaEthereum } from "react-icons/fa6";

export default function Page() {
    return (<div className="flex flex-col items-center content-start min-h-screen min-w-screen h-screen w-screen text-gray-800">
        <div className="text-4xl font-semibold">
        Real Case Study
            </div>
            <div className='flex flex-col gap-y-6 w-3/4 ml-2 mt-2'>
            <div>
                <div className="text-xl font-medium text-gray-500 flex items-center gap-x-2">
                    <FaEthereum/> FAST: Blockchain won't solve all your problems
                </div>
                <div className='text-base font-light'>
                    <div className="text-gray-400 text-lg">Background</div>
                    Our client wanted us to install a two-node api-client architecture for themselves.
                    <br/>Both the API and the Client were developed by a third company.
                    <br/>So far everything seems normal.
                    <br/>
                    <div className="text-gray-400 text-lg mt-10">Requirements</div>
                    The product we had to install is made of the following components:
                    <ul className="ml-5">
                        <li>1. An API node responsible to expose a Public API <span className="font-semibold">our</span> client will use to develop their applications</li>
                        <li>2. A Client for the third party effective product, an Ethereum Smart Contract on a second level ledger.</li>
                    </ul>
                    <br/>
                    Both the API and the Client needed Hashicorp's Vault to handle their secrets, therefore we had to install Hashicorp's Vault as a requirement for both nodes to work.<br/>
                    Another hidden requirement was that we would have needed to install a tunneling to their AWS ECR to pull the products to install, why hidden? Because our client wanted everything to be installed on Google Cloud Platform and the third party was not aware of it.
                    This really hard to maintain since both AWS and GCP use different VPN settings and may disable the tunneling due to not seeing any liveness metric.

                    <div className="text-gray-400 text-lg mt-10">Conclusion</div>
                    <span className="font-semibold">tl;dw</span> we decided to instead use a Pod on GKE (since we were already using for the other servers as well) dedicated to login to AWS ECR, pull the image, re-tag it and push it to local Google Cloud Project's Artifact Registry. Automating it with a cronjob was much simpler than trying to keep alive the VPN.
                    <br/><br/>At the end of the day we installed the Smart Contract client, and it was not only slow as hell but unfinished. As of today we are still deploying newer and newer versions while our client spends hundreds of thousands of dollars to keep up the whole infrastructure for an unfinished product.
                    <br/><br/><span className="font-semibold">Take away message: make sure what you buy is something finished and useful.</span> The same product could be have done with a simple SQL Database and a procedure to ensure zero-trust operations, sometimes <span className="italic">new</span> doesn't mean better.
                </div>
            </div>
            </div> 
            
    </div>);
}