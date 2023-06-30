import React from "react";
const Service = () => {
    return (
        <div>
            <h1>Service</h1>
            <table>
                <thead>
                    <th>Services</th>
                    <th>Description</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    <tr>
                        <td>One Pager</td>
                        <td>One page website with optional added page</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>Classic Website</td>
                        <td>~ 3-5 pages</td>
                        <td>1500</td>
                    </tr>
                    <tr>
                        <td>E-Commerce</td>
                        <td>Online Store/ Booking with up to 5 pages</td>
                        <td>2000</td>
                    </tr>
                    <tr>
                        <td>UI/UX Design</td>
                        <td>Complete website Design in Figma for </td>
                        <td>800</td>
                    </tr>
                    <tr>
                        <td>Refresh a Site</td>
                        <td>Refresh your website that currently exists  </td>
                        <td>Contact</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Service;