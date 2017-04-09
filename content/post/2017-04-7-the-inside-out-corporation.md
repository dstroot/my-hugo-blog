+++
title = "The Inside-Out Corporation"
description = ""
keywords = [
]
categories = [
]
date = "2017-04-07T10:25:35-08:00"
published = "true"

+++

![the Internet](/img/internet.jpg)

### We know how to make Internet services secure

From anywhere, using my personal laptop, I can:

* Access my bank account(s)
* Access my retirement and brokerage accounts
* Use my credit card to buy things
* Review my medical test results
* Send love notes to my wife

These are the most sensitive and private things I can imagine, and I can do these things **securely from any untrusted network anywhere in the world**.  Starbucks, my hotel, the airport, and from my mobile device anywhere there is cellular data service.  

### So why do corporate networks still exist?

Most companies still have a separate corporate network, protected by firewalls, intrusion prevention/detection, dedicated administrators, VPNs, etc. Why is it that can can I access information which is the most important, private, and precious to me, from any computer, via any network, **without all that extra cost, overhead, and effort**?

<!--more-->

Even before the Internet, there were corporate networks.  These networks were designed the way medieval castles were designed; as fortresses. They were designed to keep the unwanted out, using a heavily fortified gate (e.g. a firewall - a single point of ingress and egress).  Anyone outside is considered dangerous, and anyone inside is trusted.  However, anyone who makes it past the drawbridge has the run of the place. 

New technology emerged against medieval defenses - scaling ladders; battering rams; siege towers and various types of catapults such as the mangonel, onager, ballista, and trebuchet. However, the main reason that the medieval castle approach failed was it became impossible to keep expanding a stone perimeter around a growing population.  Eventually people had to live "outside the wall".

### Introducing the "Inside Out" corporation

Imagine a company that eliminates the traditional corporate network by turning "inside out" and making **all of it's systems and applications available directly over the Internet**.  No more corporate network, no more employee VPNs. In other words, no more castle wall - instead employees live "outside the wall", much like people in modern cities.   

Access depends solely on device and user credentials, regardless of a user’s network location — whether it is an enterprise location, a home network, a hotel, or a coffee shop.  As a result, all employees, contractors, consultants, etc. can work productively and securely from any network without the need for a traditional VPN connection into a privileged corporate network. Even the concept of local and remote access goes away because **the user experience is identical** (apart from potential differences in latency). 

#### The results:

* **Better security**. Yes, better security - **each service is secured and hardened**. This approach forces application security to be truly effective and not "security theater". When an attacker breaches a corporate network they may find very few internal connections are encrypted and packets can be sniffed easily - and internal services vulnerable to attack. This is called "Tootsie Pop" security - a hard outer shell and soft on the inside. However, using the inside-out model it would be difficult to breach even one service.  Delivering services over the Internet requires **each connection to be secured by end-to-end encryption** via Transport Layer Security (TLS).
* **Lower costs**. Lets make a couple simplifying assumptions.  First, let's assume that eliminating the corporate network saves money. Let's also assume that making applications hardened so that they can be exposed to the Internet requires additional investment.  For the sake of argument let's assume these costs offset each other so the net spend is the same (although later I will make some arguments that it could be significantly less). 
  * **Lower Risk** - If these costs offset why is it still less expensive?  Because of lower risks - securing a network is done to prevent information leakage. Put another way, companies evaluate the cost of security **relative** to the costs of a breach.  If the risk of a breach is reduced, then the potential cost to a company is also reduced. 
  * **Higher Productivity** - Another reason this model costs less is higher employee productivity. It cannot be stated strongly enough how even small barriers of time add up to large costs. If it takes an employee 3 minutes to log in via a VPN before they can be productive the cost is not just three minutes of their time, rather it is the cost that they may not log in remotely **at all**.  Those extra few minutes cause employees to think "I'll just do this tomorrow when I'm in the office".
  * **Lower Business Continuity Costs** - Business continuity becomes cheaper.  If employees can work from anywhere then the need for specialized business continuity support for employees goes away.  
  * **Lower Technology Costs Over Time** - The Internet is the most reliable technology ever created, and it is arguably the best value. It is nearly free and higher bandwidth costs less every year. The cost of deploying corporate applications over the Internet is only going to decrease over time, while the cost of defending a corporate network is only going to increase.  

### Google calls the Inside-Out corporation "BeyondCorp"

#### Google’s BeyondCorp Mission (2011-2017)

To have every Google employee work successfully from untrusted networks without use of a VPN.

#### BeyondCorp Principles

Connecting from a particular network must not determine which services you can access.
Access to services is granted based on what we know about you and your device.
All access to services must be authenticated, authorized and encrypted.

#### High-level Components of BeyondCorp

* Single sign-on, 
* access proxy, 
* access control engine, 
* user inventory, 
* device inventory, 
* security policy, 
* trust repository

Google first wrote about the concepts behind the BeyondCorp initiative in 2014, in a paper titled [BeyondCorp: A New Approach to Enterprise Security](https://www.beyondcorp.com/pdf/43231.pdf). They wrote a follow up paper in 2016 titled [BeyondCorp: Design to Deployment at Google](https://www.beyondcorp.com/pdf/44860.pdf) that detailed their migration path and findings along the way. A third paper titled [BeyondCorp: The Access Proxy](https://www.beyondcorp.com/pdf/45728.pdf) goes into detail about a very key component. 

BeyondCorp is now **used by most Googlers every day!**

### How to turn Your company "Inside-Out"

As consumers of internet services we understand how to access web sites securely. The problem is many of us struggle with too many different user IDs and passwords. Yet, most of us are familiar with the experience of logging in to one service like Netflix, via Facebook. Imagine logging into all your services and sites via a single identity!

Google implements Single Sign On via https://accounts.google.com. Once you are logged in, you will be able to access all your Google services like Gmail, Youtube, and Google Docs without entering your credentials again. Imagine having the same experience but with all your company applications.

In order to become an "Inside Out" company the most important thing is an effective **identity management/single-sign on architecture** and the second is an **identity-aware access proxy**.

<div class="row text-center">
	<div class="col-xs-12 col-md-4">
		<i class="fa fa-globe fa-3x" aria-hidden="true"></i>
		<h4 class="w700">Perimeterless Architecture</h4>
		<p>By treating internal applications the same as if they were public facing, there is no longer the concept of a privileged network as the primary gatekeeper.</p>
	</div>
	<div class="col-xs-12 col-md-4">
    <i class="fa fa-lock fa-3x" aria-hidden="true"></i>
		<h4 class="w700">Zero Trust by Default</h4>
		<p>Every request is authenticated and authorized in real-time based on a set of dynamic conditions that account for the constant changes in user status and device state.</p>
	</div>
	<div class="col-xs-12 col-md-4">
    <i class="fa fa-wrench fa-3x" aria-hidden="true"></i>
		<h4 class="w700">Centralized Access Controls</h4>
		<p>A reverse proxy is placed in front of every resource, where policies handle authentication and authorization in a consistent manner, fully audited for better visibility.</p>
	</div>
</div>

#### Identity Management, Federation and Single sign-on

The first thing needed is the ability to manage users and authorize those users to access corporate applications.  This requires:

* **Unified Directory**.  Companies may have many sources of user data, with none of them actually being the superset of all user data.  We need the ability to synchronize users with any number of directories, such as Active Directory, LDAP-based directories, Workday, or Google Apps. We must have **a single repository of all users and user data**.  
* **Simple User Provisioning**. Provisioning should be done directly from some type of Human Capital Management (HCM) system. Ideally when an employee or contractor starts their identities should flow from the HCM application into the company user directory, along with user attributes such as department or job function. De-provisioning or off-boarding users is critical to preventing unauthorized access to enterprise data from former employees. Again this should flow directly and immediately from the HCM system.
* **Simple Authorization Management** - It needs to be simple to grant a user in a specific department, with a defined role, access to the applications they need.  This should be driven by HR meta-data so security and application access policies can be applied automatically.

Here are some of the companies that specialize in turning organizations "inside-out". Interest is increasing rapidly. On Friday, April 7th Okta IPO'ed, making their debut on the public market. Their shares jumped more than 38 percent!

<table>
  <tr>
    <td><a href="https://auth0.com/"><img src="/img/auth0_logo.png" alt="Auth0" class="img-responsive" width="150"></a></td>
    <td><a href="https://www.onelogin.com/"><img src="/img/onelogin_logo.png" alt="Onelogin" class="img-responsive" width="150"></a></td>
  </tr>
  <tr>
    <td><a href="https://www.pingidentity.com/en.html"><img src="/img/ping_logo.png" alt="Ping Identity" class="img-responsive" width="150"></a></td>
    <td><a href="https://www.okta.com/"><img src="/img/okta_logo.svg" alt="Okta" class="img-responsive" width="150"></a></td>
  </tr>
</table>

#### Access Proxy

Another key component of BeyondCorp's front-end infrastructure is a fleet of HTTP/HTTPS reverse proxies that used to be called Google Front Ends (GFEs). GFEs provide a number of benefits, such as load balancing and TLS handling “as a service.” 

BeyondCorp leverages the GFE as a logically centralized point of access policy enforcement. GFEs were enhanced to provide authentication, authorization, self-service provisioning, and centralized logging. The resulting "enhanced GFE" is called the Access Proxy (AP). 

As a result, web applications behind the proxy don't have to have any identity or security built into them - it is "grafted on", or applied at the reverse proxy layer. Web back ends can focus on serving requests and largely ignore the details of how requests are routed to them. **This means corporate web applications can be made available to employees via the Internet with no changes!**

Google has made this **available as a free product** called the [Identity-Aware Proxy](https://cloud.google.com/iap/).  It works like this:

![Identity-Aware Proxy](/img/iap-lead_2x.png)

Bitly has open-sourced a project called [oauth2_proxy](https://github.com/bitly/oauth2_proxy). which is described as "a reverse proxy and static file server that provides authentication using Providers (Google, Azure, Facebook, GitHub, and others) to validate accounts by email, domain or group". 

Put simply, it is a completely free and open source Identity-Aware reverse proxy.  It can be deployed to make any web based application accessible via Oauth2 based authentication.  I have configured it for access to the Traefik console of my Kubernetes cluster [here](https://traefik.thepishoppe.com).

### Abandoning the castle

Isn't it time all companies decide to live "outside the wall"?  The corporate perimeter security model is outdated and does not support today's modern mobile and geographically diverse workforce. Google is one the most intelligent companies that exists today when it comes to understanding and managing IT security, and they are aggressively implementing their BeyondCorp "Inside-Out" model. What are you waiting for? 

#### References

<span class="sources">
[BeyondCorp: A new approach to enterprise security](https://cloud.google.com/beyondcorp/)<br>
[No Firewalls, No Problem for Google](https://threatpost.com/no-firewalls-no-problem-for-google/123748/)<br>
[Fundamentals of the BeyondCorp ‘Zero-Trust’ Security Framework](https://dzone.com/articles/fundamentals-of-the-beyondcorp-zero-trust-security)<br>
[Google leads the way out of the castle to the cloud](http://blog.code42.com/google-beyondcorp-leads-the-way-out-of-the-castle-to-the-cloud/)<br>
[Bitly's Oauth2 Proxy](https://github.com/bitly/oauth2_proxy)<br>
</span>
