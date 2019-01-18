<div className="row">
  {bottomLeftSidebar && !!bottomLeftSidebar.length && (
    <div className="col-sm-12 col-lg-3">{bottomLeftSidebar}</div>
  )}
  {bottomContent && !!bottomContent.length && (
    <div className="col-sm-12 col-lg-9">
      <DeviceVisible hiddenMobile>
        <StickyContainer>
          <HotelMenu />
        </StickyContainer>
      </DeviceVisible>
      <AccordionContainer>{bottomContent}</AccordionContainer>
    </div>
  )}
  {bottomRightSidebar && !!bottomRightSidebar.length && (
    <DeviceVisible onlyDesktop>
      <div className="col-3">
        <StickyContainer>{bottomRightSidebar}</StickyContainer>
      </div>
    </DeviceVisible>
  )}
</div>;
