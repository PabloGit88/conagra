<?php
namespace Odiseo\Bundle\ConAgraBundle\Form\Type;

use Symfony\Component\Form\FormBuilderInterface;
use FOS\UserBundle\Form\Type\RegistrationFormType as BaseType;

class RegistrationFormType extends BaseType
{
	private $container;
	
	public function __construct( $container , $class)
	{
		$this->container = $container;
		parent::__construct($class);
	}
	
	public function buildForm(FormBuilderInterface $builder,   array $options)
	{
		//parent::buildForm($builder, $options);
		$translator = $this->container->get('translator.default');
		
		$countryLabel = $translator->trans("signup_country");
		$builder->add('country', 'entity', array(
			'placeholder' => $countryLabel,
			'class' => 'OdiseoConAgraBundle:Country',
    		'property' => 'name',
			'label' => $countryLabel, 'required'  => true, 'attr' => array('placeholder' => $countryLabel, 'class' => 'form-control', 'data-rule-required' => 'true'
		)));
		
		$distributorLabel = $translator->trans("signup_distributor");
		$builder->add('distributor', 'entity', array(
			'placeholder' => $distributorLabel,
			'class' => 'OdiseoConAgraBundle:Distributor',
			'property' => 'name',
			'label' => $distributorLabel, 'attr' => array('placeholder' => $distributorLabel, 'class' => 'form-control'
		)));
		
		$nameLabel = $translator->trans("signup_name_placeholder");
		$builder->add('fullName', 'text', array( 'label' => $nameLabel, 'required' => true, 'attr' => array('placeholder' => $nameLabel, 'class' => 'form-control', 'data-rule-required' => 'true')));
		//email
		$emailLabel = $translator->trans("signup_email_placeholder");
		$builder->add('username', 'email', array( 'label' => $emailLabel, 'required' => true,  'attr' => array('placeholder' => $emailLabel, 'class' => 'form-control', 'data-rule-required' => 'true')));
		$builder->add('position' ,'choice', array('choices' => array(
				'Mercaderista' => 'Mercaderista',
				'Supervisor' => 'Supervisor', 
				'Gerente de Ventas' => 'Gerente de Ventas',
				'Gerente de Marcas' => 'Gerente de Marca',  
				'Ayudante General' => 'Ayudante General'
		), 'label' => 'Cargo', 'required'  => true, 'attr' => array('class' => 'form-control', 'data-rule-required' => 'true')));
		
		$passwordLabel = $translator->trans("signup_password_placeholder");
		$builder->add('plainPassword', 'password', array( 'label' => $passwordLabel, 'required' => true,  'attr' => array('placeholder' => $passwordLabel, 'class' => 'form-control', 'data-rule-required' => 'true') ));
		
	}

	public function getName()
	{
		return 'conagra_user_registration';
	}
}