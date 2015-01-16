<?php
namespace Odiseo\Bundle\ConAgraBundle\Form\Type;

use Symfony\Component\Form\FormBuilderInterface;
use FOS\UserBundle\Form\Type\RegistrationFormType as BaseType;

class RegistrationFormType extends BaseType
{
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		//parent::buildForm($builder, $options);
		// add your custom field$country
		$builder->add('country', 'choice', array('choices' => array(
				'-1' => 'País',
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
		'label' => 'Pais', 'required'  => true));
		
		$builder->add('distributor', 'choice', array('choices' => array(
				'-1' => 'Distribuidor', 
		),  
		'label' => 'Distribuidor', 'required'  => true));
		
		$builder->add('fullName', 'text', array( 'label' => 'Nombre', 'required' => true));
		//email
		
		$builder->add('username', 'email', array( 'label' => 'Email', 'required' => true));
		$builder->add('position' ,'choice', array('choices' => array(
				'Mercaderista' => 'Mercaderista',
				'Supervisor' => 'Supervisor', 
				'Gerente de Ventas' => 'Gerente de Ventas',
				'Gerente de Marcas' => 'Gerente de Marca',  
				'Ayudante General' => 'Ayudante General'
		), 'label' => 'Cargo', 'required'  => true));
		
		$builder->add('plainPassword', 'password', array( 'label' => 'Crear Contraseña', 'required' => true));
		
	}

	public function getName()
	{
		return 'conagra_user_registration';
	}
}