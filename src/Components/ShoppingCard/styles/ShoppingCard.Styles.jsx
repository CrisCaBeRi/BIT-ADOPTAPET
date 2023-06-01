import styled from "@emotion/styled"

export const CardContainerFather = styled('div')(() => ({
    display: 'flex',
    backgroundColor: '#FBF6ED',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: '1rem',
    minHeight: '40hv',
    maxHeight: '100vh',
}));

export const CardContainer = styled('div', {
    shouldForwardProp: (prop) => prop !== 'backgroundC',
  })(({ backgroundC }) => ({
    backgroundColor: backgroundC ? backgroundC : 'black',
    width: '93%',
    margin: '1rem 1rem',
    borderRadius: '8%',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    '&:hover': {
        boxShadow: ` rgba(2, 26, 63, 0.2) 0px 3px 8px`,
    },
}));

export const CardImg = styled('img')(() => ({
    position: 'relative',
    height: '76%',
    top: '-13%',
    left: '3%',
    maxWidth: '100%',
    marginBottom: '10px',
    
}));
export const ContentContainer = styled('div')(() => ({
    background: 'white',
    width: '100%',
    borderRadiusBottom: '8%',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',

}));

export const ButtonCard = styled('button')({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    borderRadius: '10%',
    lineHeight: 1.5,
    backgroundColor: '#6EDB3B',
    borderColor: '#6EDB3B',
    color: 'white',
    margin:'5%',
    fontFamily: [
      'Dosis',
    ].join(','),
    '&:hover': {
      backgroundColor: '#FFC632',
      borderColor: '#FFC632',
      borderRadius: '10%',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#F9ADA0',
      borderRadius: '10%',
      borderColor: '#FFE3DE',
      color: 'black',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

export const TextContainer = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: '5rem'
}));

