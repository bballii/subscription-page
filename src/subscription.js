import React, { useState } from 'react'

export default function Subscription() {
    const [planType, setPlanType] = useState("Monthly")
    const [selectedPlan, setSelectedPlan] = useState(0)

    let plans = [
        {
            name: 'Mobile',
            monthly_price: 100,
            yearly_price: 1000,
            video_quality: 'Good',
            resolution: '480p',
            devices: "Phone",
            number_of_active_screens: 1,
            stripe_monthly_id: "price_1NdHBESDwKsWhQ67Ia4MWTpO",
            stripe_yearly_id: "price_1NdHBESDwKsWhQ67HgQmqTNP"
        },
        {
            name: 'Basic',
            monthly_price: 200,
            yearly_price: 2000,
            video_quality: 'Good',
            resolution: '720p',
            devices: "Phone+Tablet",
            number_of_active_screens: 3,
            stripe_monthly_id: "price_1NdHDLSDwKsWhQ67WGM2ggZ8",
            stripe_yearly_id: "price_1NdHDMSDwKsWhQ67Za7ytHuf"
        },
        {
            name: 'Standard',
            monthly_price: 500,
            yearly_price: 5000,
            video_quality: 'Better',
            resolution: '1080',
            devices: "Phone+Tablet+Computer",
            number_of_active_screens: 5,
            stripe_monthly_id: "price_1NdHGASDwKsWhQ67OGrXnxgW",
            stripe_yearly_id: "price_1NdHGASDwKsWhQ670QRZ0miN"
        },
        {
            name: 'Premium',
            monthly_price: 700,
            yearly_price: 7000,
            video_quality: 'Best',
            resolution: '4K+HDR',
            devices: "Phone+Tablet+TV",
            number_of_active_screens: 10,
            stripe_monthly_id: "price_1NdHGzSDwKsWhQ67RlomYgWj",
            stripe_yearly_id: "price_1NdHGzSDwKsWhQ67URl3cqOq"
        },
    ];

    let titles = [`${planType} price`, "Video Quality", "Resolution", "Devices you can use to watch"]

    return (
        <div className='container p-3'>
            <div className='row mb-3'>
                <div className='col col-12 h2'>
                    Choose the right plan for you
                </div>
            </div>
            <div className='row content'>
                <div className='col col-md-3 col-lg-3 col-sm-12 mb-sm-2 position-relative'>
                    <div className='row mb-2 button-wrapper-row'>
                        <div className='col col-12 button-wrapper-col'>
                            <div className='buttons-wrapper rounded-pill'>
                                <button value={"Monthly"} onClick={(e) => setPlanType(e.target.value)} className={`btn rounded-pill ${planType == "Monthly" ? "active-button" : ""}`} >
                                    Monthly
                                </button>
                                <button value={"Yearly"} onClick={(e) => setPlanType(e.target.value)} className={`btn rounded-pill ${planType == "Yearly" ? "active-button" : ""}`}>
                                    Yearly
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col col-12 titles-row'>
                            {titles.map((title, idx) => {
                                return <>
                                    <div>
                                        {title}
                                    </div>
                                </>
                            })}
                        </div>
                    </div>

                </div>
                <div className='col col-md-9 col-lg-9 col-sm-12'>
                    <div className='row'>
                        {plans.map((plan, idx) => {
                            return (
                                <div key={idx} className={`col col-3 ${idx == selectedPlan ? 'active-texts' : 'plan-texts'}`}>
                                    <div onClick={() => setSelectedPlan(idx)} className={`plan-name ${idx == selectedPlan ? "active-plan" : ""}`}>
                                        {plan.name}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='row values-row'>
                        {plans.map((plan, idx) => {
                            return (
                                <div key={idx} className={`col col-3 ${idx == selectedPlan ? 'active-texts' : 'plan-texts'}`}>
                                    <div>{"₹ "}{planType == "Monthly" ? plan.monthly_price : plan.yearly_price}</div>
                                    <hr />
                                    <div>{plan.video_quality}</div>
                                    <hr />
                                    <div>{plan.resolution}</div>
                                    <hr />
                                    <div>
                                        {plan.devices.split('+').map((device, index) => (
                                            <p key={index}>{device}</p>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
