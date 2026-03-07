import { Component } from "react";
import {
  DashboardWrapper,
  PageTitle,
  DashboardLayout,
  Sidebar,
  SidebarList,
  SidebarItem,
  Content,
  ContentTitle,
  ContentText,
  ContentFlex,
  Card
} from "./DashboardPage.styles";
import EditAccount from '../../Components/EditAccount/EditAccount.jsx'
import MyWishlist from "../../Components/MyWishlist/MyWishlist.jsx";

class DashbordPage extends Component {
  state = {
    activeSection: "dashboard",
  };

  handleMenuClick = (section) => {
    this.setState({
      activeSection: section,
      mode: section === "address" ? "addressForm" : "dashboard",
    });
  };

  renderDashboardContent() {
    return (
      <>
       <Content>
  <ContentFlex>
    <Card>
      <ContentTitle>Account Information</ContentTitle>
      <ContentText>Alex Driver</ContentText>
      <ContentText>ExampeAdress@gmail.com</ContentText>
      <button>Add</button>
    </Card>

    <Card>
      <ContentTitle>Newsletters</ContentTitle>
      <ContentText>You don't subscribe to our newsletter.</ContentText>
      <button>Edit</button>
    </Card>

    <Card>
      <ContentTitle>Address Book</ContentTitle>
      <ContentText>You have not set a default address.</ContentText>
      <button onClick={() => this.setState({ mode: "addressForm" })}>
        Edit Address
      </button>
    </Card>

    <Card>
      <ContentTitle>Default Shipping Address</ContentTitle>
      <ContentText>You have not set a default shipping address.</ContentText>
      <button>Edit</button>
    </Card>
  </ContentFlex>
</Content>

      </>
    );
  }


  renderContent() {
    if (this.state.mode === "addressForm") {
      return this.renderAddressForm();
    }
    if (this.state.mode === "account") {
      return <EditAccount />
    }
    if (this.state.mode === "wishlist") {
      return <MyWishlist />
    }

    return this.renderDashboardContent();
  }

  render() {
    const { activeSection } = this.state;

    return (
      <DashboardWrapper>
        <PageTitle>My Dashboard</PageTitle>

        <DashboardLayout>
          <Sidebar>
            <SidebarList>
              <SidebarItem
                active={activeSection === "dashboard"}
                onClick={() => this.handleMenuClick("dashboard")}
              >
                Account Dashboard
              </SidebarItem>

              <SidebarItem
                active={activeSection === "account"}
                onClick={() => this.handleMenuClick("account")}
              >
                Account Information
              </SidebarItem>

              <SidebarItem
                active={activeSection === "address"}
                onClick={() => this.handleMenuClick("address")}
              >
                Address Book
              </SidebarItem>

              <SidebarItem
                active={activeSection === "orders"}
                onClick={() => this.handleMenuClick("orders")}
              >
                My Orders
              </SidebarItem>

              <SidebarItem
                active={activeSection === "wishlist"}
                onClick={() => this.handleMenuClick("wishlist")}
              >
                My Wishlist
              </SidebarItem>

              <SidebarItem
                active={activeSection === "newsletter"}
                onClick={() => this.handleMenuClick("newsletter")}
              >
                Newsletter Subscriptions
              </SidebarItem>
            </SidebarList>
          </Sidebar>

          <Content>{this.renderContent()}</Content>
        </DashboardLayout>
      </DashboardWrapper>
    );
  }
}

export default DashbordPage;
