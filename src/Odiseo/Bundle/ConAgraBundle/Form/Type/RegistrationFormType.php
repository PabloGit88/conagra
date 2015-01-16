<?php
namespace Odiseo\Bundle\ConAgraBundle\Form\Type;

use Symfony\Component\Form\FormBuilderInterface;
use FOS\UserBundle\Form\Type\RegistrationFormType as BaseType;
use Symfony\Component\Translation\LoggingTranslator as Translator;

class RegistrationFormType extends BaseType
{
	private $traslator;
	
	public function __construct(Translator $traslator , $class)
	{
		$this->traslator = $traslator;
		parent::__construct($class);
	}
	
	public function buildForm(FormBuilderInterface $builder,   array $options)
	{
		//parent::buildForm($builder, $options);
		// add your custom field$country
		$countryLabel = $this->traslator->trans("signup_country");
		$builder->add('country', 'choice', array('choices' => array(
				'-1' => $countryLabel,
				'Colombia' => 'Colombia', 
				'Venezuela' => 'Venezuela',
				'Ecuador' => 'Ecuador',
				'Peru' => 'Peru',
				'Bolivia' => 'Bolivia',
				'Costa Rica' => 'Costa Rica',
				'Honduras' => 'Honduras',
				'Nicaragua' => 'Nicaragua',
				'Panama' => 'Panama',
				'Belize' => 'Belize',
				'El Salvador' => 'El Salvador',
				'Guatemala' => 'Guatemala',
				'Estados Unidos' => 'Estados Unidos',
				'Argentina' => 'Argentina',
				'Chile' => 'Chile',
				'Brazil' => 'Brazil',
				'Suriname' => 'Suriname',
				'Guyana' => 'Guyana',
				'Uruguay' => 'Uruguay',
				'Paraguay' => 'Paraguay',
		),  
		'label' => $countryLabel, 'required'  => true, 'attr' => array('placeholder' => $countryLabel, 'class' => 'form-control', 'data-rule-required' => 'true')));
		
		$distributorLabel = $this->traslator->trans("signup_distributor");
		$builder->add('distributor', 'choice', array('choices' => array('-1' => $distributorLabel),  
		'label' => $distributorLabel, 'attr' => array('placeholder' => $distributorLabel, 'class' => 'form-control')));
		
		$nameLabel = $this->traslator->trans("signup_name_placeholder");
		$builder->add('fullName', 'text', array( 'label' => $nameLabel, 'required' => true, 'attr' => array('placeholder' => $nameLabel, 'class' => 'form-control', 'data-rule-required' => 'true')));
		//email
		$emailLabel = $this->traslator->trans("signup_email_placeholder");
		$builder->add('username', 'email', array( 'label' => $emailLabel, 'required' => true,  'attr' => array('placeholder' => $emailLabel, 'class' => 'form-control', 'data-rule-required' => 'true')));
		$builder->add('position' ,'choice', array('choices' => array(
				'Mercaderista' => 'Mercaderista',
				'Supervisor' => 'Supervisor', 
				'Gerente de Ventas' => 'Gerente de Ventas',
				'Gerente de Marcas' => 'Gerente de Marca',  
				'Ayudante General' => 'Ayudante General'
		), 'label' => 'Cargo', 'required'  => true, 'attr' => array('class' => 'form-control', 'data-rule-required' => 'true')));
		
		$passwordLabel = $this->traslator->trans("signup_password_placeholder");
		$builder->add('plainPassword', 'password', array( 'label' => $passwordLabel, 'required' => true,  'attr' => array('placeholder' => $passwordLabel, 'class' => 'form-control', 'data-rule-required' => 'true') ));
		
	}

	public function getName()
	{
		return 'conagra_user_registration';
	}
}