import classNames from "classnames/bind";
import Style from "./License.module.scss";

const cx = classNames.bind(Style);

function License() {
  return (
    <>
      <div className="container">
        <div className={cx("licence-container", "my-4")}>
          <h1 className={cx("license-title", "my-4", "mb-5")}>
            Terms and Conditions of Service
          </h1>
          <div className={cx("terms-container", "py-3")}>
            <div className={cx("terms-section", "mb-3")}>
              <h3 className={cx("term-title", "mb-2")}>License to Apps</h3>
              <div className={cx("term-content", "py-2")}>
                Subject to the terms of these Terms and Conditions, Duolingo
                grants you a non-transferable, non-exclusive license to
                download, install, and use one copy of each App in object code
                form only on an interactive wireless device that you own or
                control. You may not derive or attempt to derive the source code
                of all or any portion of any App, permit any third party to
                derive or attempt to derive such source code, or reverse
                engineer, decompile, disassemble, or translate any App or any
                part thereof. Duolingo and its licensors own and shall retain
                all intellectual property rights and other rights in and to the
                Apps, and any changes, modifications, or corrections thereto.
                The following terms and conditions apply to you only if you are
                using the Apps from the Apple App Store. To the extent the other
                terms and conditions of these Terms and Conditions are less
                restrictive than, or otherwise conflict with, the terms and
                conditions of this paragraph, the more restrictive or
                conflicting terms and conditions in this paragraph apply, but
                solely with respect to Apps from the Apple App Store. You
                acknowledge and agree that these Terms and Conditions are solely
                between you and Duolingo, not Apple, and that Apple has no
                responsibility for the Apps or content thereof. Your use of any
                App must comply with the App Store Terms of Service. You
                acknowledge that Apple has no obligation whatsoever to furnish
                any maintenance and support services with respect to the Apps.
                In the event of any failure of any App to conform to any
                applicable warranty, you may notify Apple, and Apple will refund
                the purchase price, if any, for the App to you; to the maximum
                extent permitted by applicable law, Apple will have no other
                warranty obligation whatsoever with respect to the Apps, and any
                other claims, losses, liabilities, damages, costs or expenses
                attributable to any failure to conform to any warranty will be
                solely governed by these Terms and Conditions. You and Duolingo
                acknowledge that Apple is not responsible for addressing any
                claims of you or any third party relating to the Apps or your
                possession and/or use of any App, including, but not limited to:
                (i) product liability claims; (ii) any claim that an App fails
                to conform to any applicable legal or regulatory requirement;
                and (iii) claims arising under consumer protection or similar
                legislation. You and Duolingo acknowledge that, in the event of
                any third-party claim that any App or your possession and use of
                that App infringes that third party’s intellectual property
                rights, Duolingo, not Apple, will be solely responsible for the
                investigation, defense, settlement and discharge of any such
                intellectual property infringement claim to the extent required
                by these Terms and Conditions. You must comply with applicable
                third party terms of agreement when using any App. You and
                Duolingo acknowledge and agree that Apple, and Apple’s
                subsidiaries, are third party beneficiaries of these Terms and
                Conditions as they relate to your license of the Apps, and that,
                upon your acceptance of these Terms and Conditions, Apple will
                have the right (and will be deemed to have accepted the right)
                to enforce these Terms and Conditions against you as a third
                party beneficiary thereof.
              </div>
            </div>
            <div className={cx("terms-section", "mb-3")}>
              <h3 className={cx("term-title", "mb-2")}>In-App Purchases</h3>
              <div className={cx("term-content", "py-2")}>
                f you purchase an auto-renewing periodic subscription through
                the Service, your Duolingo account will be billed continuously
                for the subscription until you terminate it as set forth below.
                After your initial subscription period, and again after any
                subsequent subscription period, your subscription will
                automatically renew for an additional equivalent period. If you
                do not wish your subscription to renew automatically, or if you
                want to change or terminate your subscription, you will need to
                log in to your Duolingo account and follow instructions to
                terminate or change your subscription, even if you have deleted
                your account. In the Service, you may purchase, with “real
                world” money, a limited, personal, non-transferable,
                non-sublicensable, revocable license to use (a) “virtual
                currency,” including but not limited to virtual gems, solely for
                use in the Service, and (b) “virtual in-app items” (together
                with “virtual currency,” “Virtual Items”). You are allowed to
                purchase Virtual Items through the Service, and not in any other
                way. Duolingo may manage, regulate, control, modify, or
                eliminate Virtual Items at any time, with or without notice.
                Duolingo may update the pricing of Virtual Items at any time in
                its sole discretion, and may add new Virtual Items for
                additional fees. Duolingo shall have no liability to you or any
                third party in the event that Duolingo exercises any such
                rights. The transfer of Virtual Items is prohibited except where
                expressly authorized in the Service. Other than as expressly
                authorized in the Service, you shall not sell, redeem or
                otherwise transfer Virtual Items to any person or entity,
                including but not limited to Company, another user, or any third
                party. You agree to pay all fees and applicable taxes incurred
                by you or anyone using a Duolingo account registered to you.
                Duolingo may revise the pricing for the goods and services
                offered through the Service at any time. All information that
                you provide in connection with a purchase or transaction or
                other monetary transaction interaction with the Service must be
                accurate, complete, and current. You agree to pay all charges
                incurred by users of your credit card, debit card, or other
                payment method used in connection with a purchase or transaction
                or other monetary transaction interaction with the Service at
                the prices in effect when such charges are incurred. You will
                pay any applicable taxes, if any, relating to any such
                purchases, transactions or other monetary transaction
                interactions.
              </div>
            </div>
            <div className={cx("terms-section", "mb-3")}>
              <h3 className={cx("term-title", "mb-2")}>Additional Terms</h3>
              <div className={cx("term-content", "py-2")}>
                Some of our Services have additional terms and conditions
                (“Additional Terms”). Where Additional Terms apply to a Service,
                we will make them available for you to read through your use of
                that Service. By using that Service, you agree to the Additional
                Terms.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default License;
